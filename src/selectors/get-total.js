export default (expenses) => {
   return expenses.reduce((a,v) => a+v.amount, 0)
}