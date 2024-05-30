const TransactionsList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>04.01.23</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300.00</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>01.01.24</td>
            <td>+</td>
            <td>Other</td>
            <td>Gift for your</td>
            <td>6000.00</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
