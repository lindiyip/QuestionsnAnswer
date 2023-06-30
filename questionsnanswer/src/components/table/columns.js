import { format } from 'date-fns';
import { ColumnFilter } from './ColumnFilter'; 

export const COLUMNS = [
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
    Filter: ColumnFilter,
  },
  {
    Header: "Level",
    Footer: "Level",
    accessor: "level",
    Filter: ColumnFilter,
  },
  {
    Header: "Subject",
    Footer: "Subject",
    accessor: "subject",
    Filter: ColumnFilter,
  },
  {
    Header: "Upload date",
    Footer: "Upload date",
    accessor: "upload_date",
    Cell: ({value}) => { return format (new Date (value, 'dd-mm-yyyy'))},
    Filter: ColumnFilter,
  },
  {
    Header: "Difficulty",
    Footer: "Difficulty",
    accessor: "difficulty",
    Filter: ColumnFilter,
  },
  {
    Header: "User",
    Footer: "User",
    accessor: "user",
    Filter: ColumnFilter,
  },
];
