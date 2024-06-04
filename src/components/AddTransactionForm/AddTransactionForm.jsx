import { useEffect, useState } from 'react';
import styles from './AddTransactionForm.module.css';
import FormButton from '../common/FormButton/FormButton';
import icons from '../../images/icons/sprite.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getTransactionId } from '../../constants/TransactionConstants';
import { addTrnThunk } from '../../redux/transactions/operations';
import { FiCalendar } from 'react-icons/fi';
import Select from 'react-select';
import { customStyles } from './customStyles';
import { addTrnValidSchema } from 'helpers';
import { useMedia } from 'hooks';
import { selectCategories } from '../../redux/transactions/selectors';

const AddTransactionFormNew = ({ closeModal }) => {
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(false);
  useEffect(() => {}, [isOnIncomeTab]);
  const { isTablet } = useMedia();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const categories = useSelector(selectCategories);
  const initialValues = {
    amount: '',
    comment: '',
    category: null,
  };
  const transactionCategories = useSelector(selectCategories);

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);

    dispatch(
      addTrnThunk({
        transactionDate: startDate,
        type: isOnIncomeTab ? 'INCOME' : 'EXPENSE',
        categoryId: isOnIncomeTab
          ? '063f1132-ba5d-42b4-951d-44011ca46262'
          : getTransactionId(values.category, categories),
        comment: values.comment,
        amount: isOnIncomeTab ? values.amount : 0 - values.amount,
      })
    )
      .unwrap()
      .then(() => {
        closeModal();
      })
      .catch(error => {
        setStatus({ success: false, error: error });
        setSubmitting(false);
      });
  };
  const catOptions = transactionCategories
    .slice(0, -1)
    .map(item => ({ value: item.name, label: item.name }));
  return (
    <div className={styles.modalContent}>
      {isTablet && (
        <button className={styles.closeButton} onClick={() => closeModal()}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={addTrnValidSchema(isOnIncomeTab)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <h2 className={styles.formTitle}>Add transaction</h2>
            <div className={styles.switcheWrapper}>
              <span className={`${isOnIncomeTab && styles.income}`}>
                Income
              </span>
              <input
                type="checkbox"
                id="switcherButton"
                onChange={() => setIsOnIncomeTab(!isOnIncomeTab)}
                checked={!isOnIncomeTab}
              />
              <label htmlFor="switcherButton"></label>
              <span className={`${!isOnIncomeTab ? styles.expense : null}`}>
                Expense
              </span>
            </div>
            <div className={styles.inputWrapper}>
              {!isOnIncomeTab && (
                <div className={`${styles.inputField} ${styles.category}`}>
                  <Select
                    onChange={selectedOption =>
                      setFieldValue(
                        'category',
                        selectedOption ? selectedOption.value : null
                      )
                    }
                    name="category"
                    autoFocus
                    options={catOptions}
                    styles={customStyles}
                  />
                  <ErrorMessage name="category" component="p" />
                </div>
              )}

              <div className={`${styles.inputField} ${styles.amount}`}>
                <Field type="number" name="amount" min="1" placeholder="0.00" />
                <ErrorMessage name="amount" component="p" />
              </div>

              <div className={`${styles.inputField} ${styles.date}`}>
                <ReactDatePicker
                  dateFormat="dd.MM.yyyy"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  calendarStartDay={1}
                  maxDate={new Date()}
                />
                <FiCalendar className={styles.icon} />
              </div>

              <div className={`${styles.inputField} ${styles.comment}`}>
                <Field type="text" name="comment" placeholder="Comment" />
                <ErrorMessage name="comment" component="p" />
              </div>
            </div>

            <div className={styles.buttonsWrapper}>
              <FormButton
                type={'submit'}
                text={'Add'}
                variant={'multiColorButtton'}
                isDisabled={isSubmitting}
              />
              <FormButton
                type={'button'}
                text={'cancel'}
                variant={'whiteButtton'}
                handlerFunction={() => closeModal()}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionFormNew;
