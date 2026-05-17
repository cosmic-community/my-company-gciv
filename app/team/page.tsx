import TeamMemberCard from '@/components/TeamMemberCard'
import { getTeamMembers } from '@/lib/cosmic'

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Our Team</div>
          <h1 className="text-4xl lg:text-6xl font-bold text-dark-900 mb-4">
            Meet the <span className="gradient-text">builders</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The minds behind intelligent systems that power growing businesses.
          </p>
        </div>
        {members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No team members listed yet.</p>
        )}
      </div>
    </div>
  )
}