import Date from '../components/date'

const HomeTemplate = ({
  title,
  id,
  content,
  date,
}: {
  title: string
  id: string
  content: string
  date: string
}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div>
        <Date dateString={date} />
      </div>
    </div>
  )
}

export default HomeTemplate
