import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const fullName = getMetafieldValue(member.metadata?.full_name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const photo = member.metadata?.photo
  const linkedin = getMetafieldValue(member.metadata?.linkedin_url)
  const email = getMetafieldValue(member.metadata?.email)

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {photo && (
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=facearea&facepad=3&auto=format,compress`}
            alt={fullName}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-900 mb-1">{fullName}</h3>
        {role && <p className="text-brand-600 font-medium text-sm mb-3">{role}</p>}
        {bio && <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{bio}</p>}
        <div className="flex items-center gap-3">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-600 transition-colors">
              LinkedIn
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-gray-500 hover:text-brand-600 transition-colors">
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  )
}