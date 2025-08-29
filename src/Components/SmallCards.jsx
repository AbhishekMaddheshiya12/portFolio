import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

function SmallCards({cardTitle,cardDescription}) {
  return (
    <div className='mt-12'>
        <Card className="h-full  bg-slate-800  border-gray-700 hover:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] hover:scale-105 transition-all duration-300">
            <CardHeader>
                <CardTitle className="text-2xl  text-blue-200">{cardTitle}</CardTitle>
                <CardDescription className="text-lg">{cardDescription}</CardDescription>
                {/* Marquee option */}
            </CardHeader>
        </Card>
    </div>
  )
}

export default SmallCards