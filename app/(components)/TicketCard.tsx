import Ticket from "../(models)/ticket"
import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

const TicketCard = ({ createdAt, description, id, priority, progress, status, title  }: {
  createdAt?: string; description?: string; id?: string; priority?: number; progress?: number; status?: string; title: string;
}) => {
  
  const formatTimestamp = ((timestamp: string) => {

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }

    const date = new Date(timestamp)
    const formattedDate = date.toLocaleString("en-US", options)

    return formattedDate

  })
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex justify-between mb-3">
        <PriorityDisplay
          priority={priority as number}
        />
        <DeleteBlock id={id as string}/>
      </div>

      <h4>{ title }</h4>
      <hr className="h-px border-0 bg-page mb-2"/>
      <p className="whitespace-pre-wrap">
        { description }
      </p>
      <div className="flex-grow"></div>

      <div className="flex justify-between mt-2">
        <div>
          <p className="my-1">
            { formatTimestamp(createdAt as string) }
          </p>
          <ProgressDisplay progress={progress as number}/>
        </div>

        <div>
          <StatusDisplay 
            status={status as string}
          />
        </div>
      </div>
    </div>
  )
}

export default TicketCard