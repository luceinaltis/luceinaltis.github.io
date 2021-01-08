import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const Date = ({ dateString }: Props): JSX.Element => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy년 MM월 dd일')}</time>
}

export default Date
