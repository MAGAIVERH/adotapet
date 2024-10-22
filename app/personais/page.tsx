import Header from '../_components/header'
import PersonalItem from '../_components/personal-item'
import Search from '../_components/search'
import { db } from '../_lib/prisma'

interface PersonaisPageProps {
  searchParams: {
    search?: string
  }
}

const PersonaisPage = async ({ searchParams }: PersonaisPageProps) => {
  const personais = await db.personal.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: 'insensitive',
      },
    },
  })
  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>

      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {personais.map((personal) => (
            <PersonalItem key={personal.id} personal={personal} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonaisPage
