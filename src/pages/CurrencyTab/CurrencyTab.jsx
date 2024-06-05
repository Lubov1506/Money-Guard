import { Currency } from 'components';
import { motion } from 'framer-motion';
const CurrencyTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Currency />
    </motion.div>
  );
};

export default CurrencyTab;
