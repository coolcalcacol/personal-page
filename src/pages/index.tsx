/** @format */

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

// import { Button } from '@/components/Button'
import { Container } from '@/components/Container';
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
} from '@/components/SocialIcons';

import logoWhyNot from '@/images/logos/whynot.svg';
import logoNeilson from '@/images/logos/neilson.svg';
import logoRYA from '@/images/logos/RYA.svg';
import logoCheesyToastShack from '@/images/logos/cheesy-toast-shack.svg';

import image1 from '@/images/photos/4P1A4446.jpg';
import image2 from '@/images/photos/p194903973-5.jpg';
import image3 from '@/images/photos/20220701_212844.jpg';
import image4 from '@/images/photos/20220720081827_IMG_4760.jpg';

interface WorkDate {
	label: string;
	dateTime: string;
}
interface WorkExperience {
	company: string;
	title: string;
	logo: any;
	start: WorkDate | string;
	end: WorkDate | string;
}

function BriefcaseIcon(props: any) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}>
			<path
				d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
			/>
			<path
				d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
				className="stroke-zinc-400 dark:stroke-zinc-500"
			/>
		</svg>
	);
}

function ArrowDownIcon(props: any) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SocialLink({
	icon: Icon,
	href,
	...props
}: {
	icon: any;
	href: string;
	props?: any[];
}) {
	return (
		<Link className="group -m-1 p-1" href={href} {...props}>
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	);
}

function Resume() {
	let resume: WorkExperience[] = [
		{
			company: 'Why Not Nightclub',
			title: 'Bartender',
			logo: logoWhyNot,
			start: '2022',
			end: '2023',
		},
		{
			company: 'Neilson Active Holidays',
			title: 'Watersports Instructor',
			logo: logoNeilson,
			start: '2022',
			end: '2022',
		},
		{
			company: 'RYA (Volunteer)',
			title: 'RYA Dinghy Instructor',
			logo: logoRYA,
			start: '2020',
			end: {
				label: 'Present',
				dateTime: new Date().getFullYear().toString(),
			},
		},
		{
			company: 'The Cheesy Toast Shack',
			title: 'General Employee',
			logo: logoCheesyToastShack,
			start: '2019',
			end: '2021',
		},
		{
			company: 'St Andrews Sailing Club',
			title: 'RYA Assistant Dinghy Instructor',
			logo: logoRYA,
			start: '2016',
			end: '2020',
		},
	];

	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{resume.map((role) => (
					<li
						key={`${role.title}-${role.company}`}
						className="flex gap-4">
						<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
							<Image
								src={role.logo}
								alt=""
								className="h-7 w-7"
								unoptimized
							/>
						</div>
						<dl className="flex flex-auto flex-wrap gap-x-2">
							<dt className="sr-only">Company</dt>
							<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
								{role.company}
							</dd>
							<dt className="sr-only">Role</dt>
							<dd className="text-xs text-zinc-500 dark:text-zinc-400">
								{role.title}
							</dd>
							<dt className="sr-only">Date</dt>
							<dd
								className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
								aria-label={`${
									typeof role.start !== 'string'
										? role.start.label
										: role.start
								} until ${
									typeof role.end !== 'string'
										? role.end.label
										: role.end
								}`}>
								<time
									dateTime={
										typeof role.start !== 'string'
											? role.start.dateTime
											: role.start
									}>
									{typeof role.start !== 'string'
										? role.start.label
										: role.start}
								</time>{' '}
								<span aria-hidden="true">—</span>{' '}
								<time
									dateTime={
										typeof role.end !== 'string'
											? role.end.dateTime
											: role.end
									}>
									{typeof role.end !== 'string'
										? role.end.label
										: role.end}
								</time>
							</dd>
						</dl>
					</li>
				))}
			</ol>
			{/*TODO: Re-implement this once CV is sorted */}
			{/*<Button href="#" variant="secondary" className="group mt-6 w-full">*/}
			{/*  Download CV*/}
			{/*  <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />*/}
			{/*</Button>*/}
		</div>
	);
}

function Photos() {
	let rotations = ['rotate-3', '-rotate-1', 'rotate-2', 'rotate-2'];

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4].map((image, imageIndex) => (
					<div
						key={image.src}
						className={clsx(
							'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
							rotations[imageIndex % rotations.length],
						)}>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Alex Dumbreck - Jr. Software engineer</title>
				<meta
					name="description"
					content="I’m Alex, a software engineer based in Edinburgh, Scotland. I’m currently in my second year of University, at Edinburgh Napier University."
				/>
			</Head>
			<Container className="mt-9">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						Junior Software Engineer and an Avid Sailor
					</h1>
					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						Hi! I’m Alex, a{' '}
						{Math.abs(
							new Date(
								Date.now() - new Date(2004, 1, 10).valueOf(),
							).getUTCFullYear() - 1970,
						)}{' '}
						year old junior software engineer based in Edinburgh,
						Scotland. I’m currently in my second year of University,
						at Edinburgh Napier University.
					</p>
					<div className="mt-6 flex gap-6">
						<SocialLink
							href="https://instagram.com/alex.dumbreck"
							aria-label="Follow on Instagram"
							icon={InstagramIcon}
						/>
						<SocialLink
							href="https://github.com/coolcalcacol"
							aria-label="Follow on GitHub"
							icon={GitHubIcon}
						/>
						<SocialLink
							href="https://linkedin.com/alex-dumbreck"
							aria-label="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
					</div>
				</div>
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
					<div className="space-y-10 lg:px-16 xl:px-24">
						<Resume />
					</div>
				</div>
			</Container>
		</>
	);
}
