import { Table } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { actionSelectedCoordinates } from "../../redux/slice"
import { columns } from "./columns-table"
import s from './table.module.css'

export const TableContainer = () => {
  const dispatch = useDispatch()
  // для подсвета выделенного текста
  const selectedCoordinates = useSelector((state) => state.someReducer.selectedCoordinates)
  const data = useSelector((state) => state.someReducer.data)

  return <div className={s.table_container}>
    {data.length > 0 && <Table
      columns={columns(selectedCoordinates)}
      dataSource={data}
      size="small"
      rowKey="name"
      rowClassName={s.row_table}
      onRow={(record) => {
        return {
          onClick: () => {
            dispatch(actionSelectedCoordinates(record))  // click row
          }
        }
      }} />
    }
  </div>
}