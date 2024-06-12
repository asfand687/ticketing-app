import Image from 'next/image'
import TicketCard from './(components)/TicketCard'

const getTickets = async () => {

  try {

    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store"
    })
    return res.json()

  } catch (error) {

    console.error("Failed to get tickets: ", error)
  }
}

export default async function Dashboard() {

  const { tickets } = await getTickets()

  const uniqueCategories: string[] = [
    ...new Set<string>(tickets?.map((ticket: Record<string, any>) => ticket.category) ?? [])
  ]

  return (
    <main className='p-5'>
      <div>
        {
          tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className='mb-4'>
              <h2>{uniqueCategory}</h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                {
                  tickets.filter((ticket: Record<string, any>) => ticket.category === uniqueCategory)
                    .map((ticket: Record<string, any>) => (
                      <TicketCard
                        key={ticket._id}
                        createdAt={ticket.createdAt}
                        description={ticket.description}
                        id={ticket._id}
                        priority={ticket.priority}
                        progress={ticket.progress}
                        status={ticket.status}
                        title={ticket.title}
                      />
                    ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}
