import { useEffect, useState } from 'react';
import s from './EditModal.module.css';
import FormButton from '../common/FormButton/FormButton';
import icons from '../../images/icons/sprite.svg';
import { useMediaQuery } from 'react-responsive';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  transactionCategories,
  getTransactionId,
  getTransactionCategory,
} from '../../constants/TransactionConstants';
import { addTrnThunk, editTrnThunk } from '../../redux/transactions/operations';
import { getBalanceThunk } from '../../redux/auth/operations';
import { FiCalendar } from 'react-icons/fi';
import { useMedia } from '../../hooks/useMedia';
import Slash from './Slash';
import clsx from 'clsx';

const EditModal = ({ closeModal, item }) => {
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(
    item.type === 'EXPENSE' ? false : true
  );
  useEffect(() => {}, [isOnIncomeTab]);

  const { isTablet } = useMedia();
  console.log(item);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(item.transactionDate);

  const initialValues = {
    amount: Math.abs(item.amount) ,
    comment: item.comment,
    category: getTransactionCategory(item.categoryId),
  };

  //   const { isMobile } = useMedia();

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);

    console.log(initialValues.category);
      console.log(getTransactionId(initialValues.category));
      dispatch(
      editTrnThunk({
        id: item.id,
        transactionDate: startDate,
        type: isOnIncomeTab ? 'INCOME' : 'EXPENSE',
        // categoryId: getTransactionId(values.category || 'Income'),
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

  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={s.modalContent}>
        {isTablet && (
          <button className={s.closeButton} onClick={() => closeModal()}>
            <svg>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        )}
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting  }) => (
            <Form>
              <h2 className={s.formTitle}>Edit transaction</h2>

              <div className={s.switcheWrapper}>
                <span className={clsx(isOnIncomeTab && s.income)}>Income </span>
                <Slash />
                <span className={clsx(!isOnIncomeTab && s.expense)}>
                  Expense
                </span>
              </div>

              <div className={s.inputWrapper}>
                {/* {!isOnIncomeTab && (
                  <div className={`${s.inputField} ${s.category}`}>
                                      <Field as="select" name="category" autoFocus required onChange={e => {
                                          console.log(e.target.value);
                                          setFieldValue('category', e.target.value)
                                      }}>
                      <option value="" hidden>
                        Select your category
                      </option>
                      {transactionCategories.slice(0, -1).map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="category" component="p" />
                  </div>
                )} */}

                <div className={clsx(s.inputField,s.amount)}>
                  <Field
                    type="number"
                    name="amount"
                    min="1"
                    placeholder="0.00"
                  />
                  <ErrorMessage name="amount" component="p" />
                </div>

                <div className={clsx(s.inputField,s.date)}>
                  <ReactDatePicker
                    dateFormat="dd.MM.yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    calendarStartDay={1}
                  />
                  <FiCalendar className={s.icon} />
                </div>

                <div className={clsx(s.inputField,s.comment)}>
                  <Field type="text" name="comment" placeholder="Comment" />
                  <ErrorMessage name="comment" component="p" />
                </div>
              </div>

              <div className={s.buttonsWrapper}>
                <FormButton
                  type={'submit'}
                  text={'Save'}
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
    </div>
  );
};

export default EditModal;
