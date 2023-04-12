/** @format */

import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import { ReactNode } from 'react';

function ToolsSection({
	children,
	title,
	...props
}: {
	children: ReactNode;
	title: string;
	props?: any[];
}) {
	return (
		<Section title={title} {...props}>
			<ul role="list" className="space-y-16">
				{children}
			</ul>
		</Section>
	);
}

function Tool({
	title,
	href,
	children,
}: {
	title: string;
	href?: string;
	children?: ReactNode;
}) {
	return (
		<Card as="li">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Description>{children}</Card.Description>
		</Card>
	);
}

export default function Uses() {
	return (
		<>
			<Head>
				<title>Uses - Alex Dumbreck</title>
				<meta
					name="description"
					content="Software I use, gadgets I love, and other things I recommend."
				/>
			</Head>
			<SimpleLayout
				title="Software I use, gadgets I love, and other things I recommend."
				intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.">
				<div className="space-y-20">
					<ToolsSection title="PC #1">
						<Tool title="Computer">
							This thing is a beast. It’s a custom-built desktop
							with a Ryzen 9 5900x, 64GB of RAM, RTX 4090 OC Strix
							GPU, 1TB NVMe SSD, and a 4TB HDD. It’s a little
							overkill for my needs, but I like having the power
							to run anything and everything I will ever need to
							run concurrently.
						</Tool>
						<Tool title="Dual 32 inch 4k Samsung Displays">
							I <b>LOVE</b> having two monitors, I cannot imagine
							going back to just one. The 4k resolution is also a
							huge plus, I can fit so much more on the screen at
							once. I will regularly have 3-4 windows open at
							once, and I can still see everything.
						</Tool>
						<Tool title="Corsair K95 Cherry MX Blue">
							A full-size mechanical keyboard with Cherry MX Blue
							switches. Moving from a 60% MX Brown Ducky one2 mini
							and the wrist rest on this thing is a godsend. Can
							type for hours without any wrist pain, and the macro
							keys allow me to quickly launch all my IDEs in the
							morning when I turn the PC on.
						</Tool>
						<Tool title="Logitech MX Master 2s">
							Its a mouse. It’s wireless. It’s got a scroll wheel.
							The infinite scroll is okay, I guess.
						</Tool>
						<Tool title="Secretlabs Titan 2020 Chair">
							If I’m going to slouch in the worst ergonomic
							position imaginable all day, I might as well do it
							in an expensive chair.
						</Tool>
					</ToolsSection>
					<ToolsSection title="PC #2">
						<Tool title="Computer">
							This is my old PC. it was initially in my parents
							house but I brought it over as I would never use it
							there. It is my first custom built PC, with an i9
							9900k, 32GB of RAM, RTX 2070 Super, 500GB Sata SSD
							and a 2TB HDD. The SSD is a little small, and quite
							slow, but it does the job if I ever have any friends
							over to play games on.
						</Tool>
						<Tool title="Dual 27 inch 1080p Philips Displays">
							This is where my love for dual monitors started. I
							got one of these monitors with a prebuilt PC I was
							given to do homework on, and as I modified that PC,
							and added dedicated graphics I saved up and bought a
							second one. The difference was night and day. Even
							for playing games after school, I was able to have
							discord open on the 2nd monitor and chat with
							friends so much easier that before.
						</Tool>
						<Tool title="Cheap Membrane Keyboard">
							This is a cheap keyboard that I got with the
							prebuilt. It feels awful compared to my main
							keyboard, but it works. My Ducky one2 mini is a much
							better keyboard, but it has started registering
							single key-presses as double key-presses, so I have
							to use this one for typing to be legible.
						</Tool>
						<Tool title="Cheap Mouse">
							This is the cheap gaming mouse I got with the PC. It
							does the job perfectly, but switching from a
							wireless mouse to one that is wired can sometimes be
							a pain, getting the cord tangled.
						</Tool>
						<Tool title="ARGOS Gaming Chair">
							This is a cheap gaming chair I got years ago. It
							looks tatty now, but still works as a chair.
						</Tool>
					</ToolsSection>
					<ToolsSection title="Development tools">
						<Tool title="JetBrains IDE Suite">
							I get the JetBrains tools for free, through the
							github education pack. I used to use VS Code but
							I&apos;ve got so used to the JetBrains IDEs that I
							can&apos;t go back. Currently, I use ToolBox,
							WebStorm, CLion, DataGrip, PyCharm, Android Studio,
							Rider and IntelliJ Ultimate.
						</Tool>
						<Tool title="Windows Terminal">
							The new Windows Terminal is great because everything
							launches through it now, instead of separately. Not
							sure what features it has that others don&apos;t,
							but it&apos;s my goto now.
						</Tool>
						<Tool title="GitKraken">
							GitKraken is a great git client, and I also get it
							for free with the github education pack. I use it
							for things that the Jetbrains IDEs don&apos;t
							support, or to clean up my mistakes.
						</Tool>
						<Tool title="MobaXterm">
							MobaXterm is a great SSH client, and I use it to
							check up on my servers. I have been looking into
							ways of moving away from using it and integrating my
							ssh client into my IDEs
						</Tool>
					</ToolsSection>
					<ToolsSection title="Productivity">
						<Tool title="Discord">
							I have a few servers that I use for gaming with
							friends. I also have a few bots that I have created
							that I use to keep track of my work, and other
							things.
						</Tool>
						<Tool title="Spotify">
							I use Spotify to listen to music, which I can&apos;t
							work without. I also sometimes use it to listen to
							podcasts.
						</Tool>
					</ToolsSection>
				</div>
			</SimpleLayout>
		</>
	);
}
