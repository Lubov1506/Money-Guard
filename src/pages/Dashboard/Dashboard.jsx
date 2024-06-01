import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import { Suspense, useState } from 'react';
import { useMedia } from '../../hooks/useMedia';
import {
  Balance,
  Currency,
  Header,
  MoneyLoader,
  Navigation,
} from '../../components';
import ModalAddTransactionNew from '../../components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from '../../components/ModalEditTransaction/ModalEditTransaction';

const Dashboard = () => {
  const { isDesktop, isTablet } = useMedia();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  // const openEditModal = () => setIsEditModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  // const closeEditModal = () => setIsEditModalOpen(false);
  return (
    <>
      {isAddModalOpen && <ModalAddTransactionNew closeModal={closeAddModal} />}

      <Header />
      <div className={s.divBackground}>
        {isDesktop ? (
          <>
            <div className={s.noOutletWrapper}>
              <Navigation />
              <Balance />
              <Currency />
            </div>
          </>
        ) : isTablet ? (
          <>
            <div className={s.noOutletWrapper}>
              <div className={s.navBalWrapper}>
                <Navigation />
                <Balance />
              </div>
              <Currency />
            </div>
          </>
        ) : (
          <>
            <Navigation />
            <Balance />
          </>
        )}
        <Suspense fallback={<MoneyLoader />}>
          <Outlet
            context={{
              openAddModal,
              // openEditModal,
            }}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Dashboard;
