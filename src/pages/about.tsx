/** @format */

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';
import { ReactNode } from 'react';

function SocialLink({
	className,
	href,
	children,
	icon: Icon,
}: {
	icon: any;
	href: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				href={href}
				className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	);
}

function MailIcon(props: any) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	);
}

export default function About() {
	return (
		<>
			<Head>
				<title>About - Alex Dumbreck</title>
				<meta
					name="description"
					content="I’m Alex Dumbreck. I live in Edinburgh, Scotland and love learning new stuff."
				/>
			</Head>
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={portraitImage}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							I’m Alex Dumbreck. I live in Edinburgh, Scotland and
							love learning new stuff.
						</h1>
						<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							<p>
								I have always loved learning new things, and
								shortly after moving house back in 2012 I got my
								first computer. I was hooked. I started learning
								how to code through a discord bot called echo,
								and small javascript projects, and have been
								doing it ever since.
							</p>
							<p>
								A couple of other things that I love doing are
								sailing and skiing. When I am on the water and
								the slopes, I have always felt more freedom than
								anywhere else in the world. I love the feeling
								of the wind in my hair and the sun on my face.
							</p>
							<p>
								I have spent the last few years working on my
								TypeScript and more broadly my OOP skills, and I
								am currently working on a project called{' '}
								<a
									style={{ color: 'whitesmoke' }}
									href="https://private6mans.xyz">
									Private 6 Mans
								</a>{' '}
								which is a matchmaking service that can be used
								to rank you and your friends in any multiplayer
								game.
							</p>
							<p>
								I am also working on a slightly smaller project
								that takes the fundamentals of Private 6 Mans
								and orients it towards the new Call of Duty
								game, where we were the first public service to
								offer a ranked multiplayer system, before even
								the game itself
							</p>
							<p>
								Today, I’m working towards getting an university
								placement where I can apply my skills in the
								industry itself and get a feel for where I want
								to take my career.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<ul role="list">
							<SocialLink
								href="#"
								icon={InstagramIcon}
								className="mt-4">
								Follow on Instagram
							</SocialLink>
							<SocialLink
								href="#"
								icon={GitHubIcon}
								className="mt-4">
								Follow on GitHub
							</SocialLink>
							<SocialLink
								href="#"
								icon={LinkedInIcon}
								className="mt-4">
								Follow on LinkedIn
							</SocialLink>
							<SocialLink
								href="mailto:alex@dumbreck.xyz"
								icon={MailIcon}
								className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
								alex@dumbreck.xyz
							</SocialLink>
						</ul>
					</div>
				</div>
			</Container>
		</>
	);
}
