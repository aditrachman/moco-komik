import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import bl from '@/images/avatars/bl.jpg'
import ds from '@/images/avatars/ds.png'
import cnc from '@/images/avatars/cnc.jpg'
import snv from '@/images/avatars/snv.png'
import kmnw from '@/images/avatars/kmnw.jpg'
import gi from '@/images/avatars/gi.jpg'
import opm from '@/images/avatars/opm.jpg'
import ywe from '@/images/avatars/ywe.webp'
import ats from '@/images/avatars/ats.jpg'

import lotnb from '@/images/avatars/lotnb.jpg'
import or from '@/images/avatars/or.webp'
import sl from '@/images/avatars/sl.png'
import tbate from '@/images/avatars/tbate.jpg'
import hoih from '@/images/avatars/hoih.webp'
import dp from '@/images/avatars/dp.png'
import twbe from '@/images/avatars/twbe.jpg'
import am from '@/images/avatars/am.jpeg'
import nm from '@/images/avatars/nm.jpg'
import tgmr from '@/images/avatars/tgmr.jpg'
import mr from '@/images/avatars/mr.jpg'


import gh from '@/images/avatars/gh.jpg'
import hb from '@/images/avatars/hb.jpg'
import st from '@/images/avatars/st.jpg'
import ls from '@/images/avatars/ls.jpg'
import to from '@/images/avatars/to.jpg'
import hk from '@/images/avatars/hk.jpg'
import aq from '@/images/avatars/aq.jpg'
import dov from '@/images/avatars/dov.jpg'
import mw from '@/images/avatars/mw.jpg'
import tg from '@/images/avatars/tg.jpg'
import ts from '@/images/avatars/ts.jpg'


import stg from '@/images/avatars/stg.jpg'
import da from '@/images/avatars/da.jpg'
import jr from '@/images/avatars/jr.jpg'
import tw from '@/images/avatars/tw.jpg'
import bb from '@/images/avatars/bb.jpeg'
import se from '@/images/avatars/se.jpg'
import lok from '@/images/avatars/lok.jpg'
import satulapan from '@/images/avatars/1899.jpg'


const days = [
  {
    name: 'Japan',
    date: 'Manga',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Blue Lock',
        role: 'Chapter 200 (ongoing)',
        image: bl,
      },
      {
        name: 'Mato seihei no slave ',
        role: 'Chapter 98 (ongoing)',
        image: ds,
      },
      {
        name: 'Cigarette And Cherry',
        role: 'Chapter 123 (ongoing)',
        image: cnc,
      },
      {
        name: 'Shuumatsu no valkyrie',
        role: 'Chapter 73 (ongoing)',
        image: snv,
      },
      {
        name: 'Kuroiwa Medaka ni Watashi no Kawaii ga Tsuujinai',
        role: 'Chapter 72 (ongoing)',
        image: kmnw,
      },
      {
        name: 'Ase to Sekken',
        role: 'Chapter 98 (END)',
        image: ats,
      },
      {
        name: 'Gaishuu Isshoku!',
        role: 'Chapter 34 (ongoing)',
        image: gi,
      },
      {
        name: 'One Punch Man',
        role: 'Chapter 227 (ongoing)',
        image: opm,
      },
      {
        name: 'Yakumo san wa edzuke',
        role: 'Chapter 79 (END)',
        image: ywe,
      },
    ],
  },
  {
    name: 'Korea',
    date: 'Manhwa',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Legend of the Northern Blade',
        role: 'Chapter 140 (ongoing)',
        image: lotnb,
      },
      {
        name: 'Omniscient Reader’s Viewpoint',
        role: 'Chapter 142 (ongoing)',
        image: or,
      },
      {
        name: 'Solo Leveling',
        role: 'Chapter 170 (END)',
        image: sl,
      },
      {
        name: 'Nano Machine',
        role: 'Chapter 139 (ongoing)',
        image: nm,
      },
      {
        name: 'The Beginning After the End',
        role: 'Chapter 174 (ongoing)',
        image: tbate,
      },
      {
        name: 'Medical Return',
        role: 'Chapter 148 (END)',
        image: mr,
      },
      {
        name: 'The Great Mage Returns After 4000 Years',
        role: 'Chapter 154 (ongoing)',
        image: tgmr,
      },
      {
        name: 'Hoarding in Hell',
        role: 'Chapter 40 (ongoing)',
        image: hoih,
      },
      {
        name: 'White Dragon Duke: Pendragon',
        role: 'Chapter 68 (ongoing)',
        image: dp,
      },
      {
        name: 'The World’s Best Engineer',
        role: 'Chapter 82 (ongoing)',
        image: twbe,
      },
      {
        name: 'Archmage Streamer',
        role: 'Chapter 50 (ongoing)',
        image: am,
      },
    ],
  },
  {
    name: 'China',
    date: 'Manhua',
    dateTime: '2022-04-06',
    speakers: [
      // {
      //   name: 'Andrew Greene',
      //   role: 'Frontend Developer at Ultratech',
      //   image: andrewGreeneImage,
      // },
    
    ],
  },
  {
    name: 'Universal',
    date: 'Film',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Greyhound',
        role: 'Rating 4,9 / 5',
        image: gh,
      },
      {
        name: '13 Hours In Benghazi',
        role: 'Rating 5 / 5',
        image: hb,
      },
      {
        name: '12 Strong',
        role: 'Rating 4,6 / 5',
        image: st,
      },
      {
        name: 'Lone Survivor',
        role: 'Rating 4,6 / 5',
        image: ls,
      },
      {
        name: 'The Outpost',
        role: 'Rating 4,6 / 5',
        image: to,
      },
      {
        name: 'Hunter Killer',
        role: 'Rating 4,7 / 5',
        image: hk,
      },
      {
        name: 'All Quiet on the Western Front',
        role: 'Rating 4,2 / 5',
        image: aq,
      },
      {
        name: 'Devotion',
        role: 'Rating 3,9 / 5',
        image: dov,
      },
      {
        name: 'Midway',
        role: 'Rating 4,2 / 5',
        image: mw,
      },
      {
        name: 'Top Gun Maverick',
        role: 'Rating 5 / 5',
        image: tg,
      },
      {
        name: 'Tears of the Sun',
        role: 'Rating 5 / 5',
        image: ts,
      },
    
    ],
  },
  {
    name: 'Universal',
    date: 'Series',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Stranger Things',
        role: '4 Season',
        image: stg,
      },
      {
        name: 'Dark',
        role: '3 Season',
        image: da,
      },
      {
        name: 'Jack Ryan',
        role: '3 Season',
        image: jr,
      },
      {
        name: 'The Withcer',
        role: '3 Season',
        image: tw,
      },
      {
        name: 'Breaking Bad',
        role: '5 Season',
        image: bb,
      },
      {
        name: 'Loki Tv series',
        role: '2 Season',
        image: lok,
      },
      {
        name: '1899',
        role: '1  Season',
        image: satulapan,
      },
      {
        name: 'Sex Education',
        role: '4  Season',
        image: se,
      },
    
    
    ],
  },
  {
    name: 'Universal',
    date: 'Music',
    dateTime: '2022-04-06',
    speakers: [
      // {
      //   name: 'Andrew Greene',
      //   role: 'Frontend Developer at Ultratech',
      //   image: andrewGreeneImage,
      // },
    
    ],
  },
]



function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
       
      
 
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Rekomendasi
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
         Nah ini kan yang kalian tunggu tunggu,silahkan di baca rekomendasi best nya.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>





                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon  
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-blue-600 stroke-blue-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-blue-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
