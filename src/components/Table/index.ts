import Table from './Table'
import TableBody from './TableBody'
import TableCaption from './TableCaption'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHead from './TableHead'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}

export default Object.assign(Table, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
})
