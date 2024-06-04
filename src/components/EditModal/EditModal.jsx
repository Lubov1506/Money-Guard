import { useEffect, useState } from 'react';
import s from './EditModal.module.css';
import FormButton from '../common/FormButton/FormButton';
import icons from '../../images/icons/sprite.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { selectCategories } from '../../redux/transactions/selectors';
import {
  getTransactionId,
  getTransactionCategory,
} from '../../constants/TransactionConstants';
import { editTrnThunk } from '../../redux/transactions/operations';
import { getBalanceThunk } from '../../redux/auth/operations';
import { FiCalendar } from 'react-icons/fi';

import Slash from './Slash';
import clsx from 'clsx';
import { useMedia } from 'hooks';
import Modal from 'components/Modal/Modal';
import { editValidationSchema } from 'helpers/editValidationSchema';

const EditModal = ({ closeModal, item }) => {
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(
    item.type === 'EXPENSE' ? false : true
  );
  useEffect(() => {}, [isOnIncomeTab]);
  const categories = useSelector(selectCategories);
  const { isTablet } = useMedia();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(item.transactionDate);

  const initialValues = {
    amount: Math.abs(item.amount),
    comment: item.comment,
    category: getTransactionCategory(item.categoryId, categories),
  };
  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);
    dispatch(
      editTrnThunk({
        id: item.id,
        transactionDate: startDate,
        type: isOnIncomeTab ? 'INCOME' : 'EXPENSE',
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
    <Modal onClose={closeModal}>
      <div className={s.modalContent}>
        {isTablet && (
          <button className={s.closeButton} onClick={() => closeModal()}>
            <svg>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={editValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form className={s.form}>
              <h2 className={s.formTitle}>Edit transaction</h2>

              <div className={s.switcheWrapper}>
                <span className={clsx(isOnIncomeTab && s.income)}>Income</span>
                <span className={s.slash}>
                  <Slash />
                </span>
                <span className={clsx(!isOnIncomeTab && s.expense)}>
                  Expense
                </span>
              </div>

              <div className={s.inputWrapper}>
                <div className={clsx(s.inputField, s.amount)}>
                  <Field
                    type="number"
                    name="amount"
                    min="1"
                    placeholder="0.00"
                  />
                  <ErrorMessage name="amount" component="p" />
                </div>

                <div className={clsx(s.inputField, s.date)}>
                  <ReactDatePicker
                    dateFormat="dd.MM.yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    calendarStartDay={1}
                    maxDate={new Date()}
                  />
                  <FiCalendar className={s.icon} />
                </div>

                <div className={clsx(s.inputField, s.comment)}>
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
    </Modal>
  );
};

export default EditModal;
