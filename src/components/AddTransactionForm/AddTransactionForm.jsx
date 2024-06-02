import { useEffect, useState } from 'react';
import styles from './AddTransactionForm.module.css';
import FormButton from '../common/FormButton/FormButton';
import icons from '../../images/icons/sprite.svg';
// import { useMediaQuery } from 'react-responsive';

import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  transactionCategories,
  getTransactionId,
} from '../../constants/TransactionConstants';

import { addTrnThunk } from '../../redux/transactions/operations';
import { getBalanceThunk } from '../../redux/auth/operations';

import { FiCalendar } from 'react-icons/fi';
import Select from 'react-select';
import { customStyles } from './customStyles';
import { validationSchema } from 'helpers/addTrnValidSchema';
import { useMedia } from 'hooks/useMedia';

const AddTransactionFormNew = ({ closeModal }) => {
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(false);
  // const [category, setCategory] = useState(null)
  useEffect(() => {}, [isOnIncomeTab]);
  const { isTablet } = useMedia();
  // const screenCondition = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const initialValues = {
    amount: '',
    comment: '',
    category: null,
  };

  // const validationSchema = isOnIncomeTab
  //   ? Yup.object({
  //       amount: Yup.string().required('Required* '),
  //       comment: Yup.string().required('Required*'),
  //     })
  //   : Yup.object({
  //       amount: Yup.string().required('Required*'),
  //       comment: Yup.string().required('Required*'),
  //       category: Yup.string().required('Required*'),
  //     });

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    console.log(values.category);
    setSubmitting(true);

    dispatch(
      addTrnThunk({
        transactionDate: startDate,
        type: isOnIncomeTab ? 'INCOME' : 'EXPENSE',
        categoryId: getTransactionId(values.category || 'Income'),
        comment: values.comment,
        amount: isOnIncomeTab ? values.amount : 0 - values.amount,
      })
    )
      .unwrap()
      .then(() => {
        closeModal();
        dispatch(getBalanceThunk());
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
        validationSchema={validationSchema(isOnIncomeTab)}
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
                // <div className={`${styles.inputField} ${styles.category}`}>
                //   <Field as="select" name="category" autoFocus required>
                //     <option value="" hidden>
                //       Select your category
                //     </option>
                //     {transactionCategories.slice(0, -1).map(item => (
                //       <option key={item.id}>{item.name}</option>
                //     ))}
                //   </Field>
                //   <ErrorMessage name="category" component="p" />
                // </div>
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
