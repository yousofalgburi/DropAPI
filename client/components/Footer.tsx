import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
	<div className='flex flex-col space-y-3'>
		<h3 className='font-semibold text-primary'>{title}</h3>
		<ul className='space-y-2'>
			{links.map((link) => (
				<li key={link.href}>
					<Link href={link.href} className='text-sm text-muted-foreground hover:text-primary transition-colors' prefetch={false}>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	</div>
)

const BlogPostLinks = ({ category, posts }: { category: string; posts: { title: string; href: string }[] }) => (
	<div className='flex flex-col space-y-3'>
		<h3 className='font-semibold text-primary'>{category}</h3>
		<ul className='space-y-2'>
			{posts.map((post) => (
				<li key={post.href}>
					<Link href={post.href} className='text-sm text-muted-foreground hover:text-primary transition-colors' prefetch={false}>
						{post.title}
					</Link>
				</li>
			))}
		</ul>
	</div>
)

const SocialLink = ({ href, Icon }: { href: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => (
	<Link href={href} className='text-muted-foreground hover:text-primary transition-colors' prefetch={false}>
		<Icon />
	</Link>
)

export function Footer() {
	const legalLinks = [
		{ label: 'Terms of Service', href: '/terms' },
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Cookie Policy', href: '/cookies' },
	]

	const blogCategories = [
		{
			category: 'Job Search Tips',
			posts: [
				{ title: '10 Resume Hacks to Get Noticed', href: '/blog/resume-hacks' },
				{ title: 'Mastering the Art of Cover Letters', href: '/blog/cover-letters' },
				{ title: 'Networking Strategies for Job Seekers', href: '/blog/networking' },
				{ title: 'Acing Your Job Interview', href: '/blog/interview-tips' },
				{ title: 'Negotiating Your Salary Like a Pro', href: '/blog/salary-negotiation' },
				{ title: 'Leveraging LinkedIn for Job Search', href: '/blog/linkedin-tips' },
			],
		},
		{
			category: 'Career Development',
			posts: [
				{ title: 'Skills to Future-Proof Your Career', href: '/blog/future-skills' },
				{ title: 'Transitioning to a New Industry', href: '/blog/career-transition' },
				{ title: 'Building a Personal Brand Online', href: '/blog/personal-branding' },
				{ title: 'Continuing Education for Professionals', href: '/blog/education' },
				{ title: 'Work-Life Balance in the Modern Era', href: '/blog/work-life-balance' },
				{ title: 'Freelancing vs. Full-Time Employment', href: '/blog/freelancing' },
			],
		},
		{
			category: 'AI in Job Search',
			posts: [
				{ title: 'How AI is Revolutionizing Recruiting', href: '/blog/ai-recruiting' },
				{ title: 'Optimizing Your Resume for ATS', href: '/blog/ats-optimization' },
				{ title: 'AI-Powered Interview Preparation', href: '/blog/ai-interviews' },
				{ title: 'The Ethics of AI in Hiring', href: '/blog/ai-ethics' },
				{ title: 'Personalizing Your Job Search with AI', href: '/blog/ai-personalization' },
				{ title: 'Future of Work: AI and Automation', href: '/blog/future-of-work' },
			],
		},
	]

	return (
		<footer className='bg-background border-t border-border'>
			<div className='container mx-auto px-4 py-12'>
				{/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
					{blogCategories.map((category) => (
						<BlogPostLinks key={category.category} {...category} />
					))}
				</div> */}

				{/* TODO: add this to below: border-t */}
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='flex gap-4 items-center'>
						<p className='text-sm text-muted-foreground mb-4 md:mb-0'>&copy; {new Date().getFullYear()} DropAPI. All rights reserved.</p>

						<div>
							{legalLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='text-sm text-muted-foreground hover:text-primary transition-colors mr-4'
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
					{/* <div className='flex space-x-4'>
						<SocialLink href='https://facebook.com/DropAPI' Icon={Facebook} />
						<SocialLink href='https://twitter.com/DropAPI' Icon={Twitter} />
						<SocialLink href='https://linkedin.com/company/DropAPI' Icon={Linkedin} />
						<SocialLink href='https://instagram.com/DropAPI' Icon={Instagram} />
					</div> */}
				</div>
			</div>
		</footer>
	)
}
