import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <table className={s.history_table}>
     <thead className={s.history_head}>
      <tr>
        <th className={s.history_name}>Type</th>
        <th className={s.history_name}>Amount</th>
        <th className={s.history_name}>Currency</th>
      </tr>
  </thead>
   
  <tbody>
        {items.map((item) => (
    <tr className={s.history_list} key={item.id} >
      <td className={s.history_data}>{item.type}</td>
      <td className={s.history_data}>{item.amount}</td>
      <td className={s.history_data}>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
  )
}

export default TransactionHistory