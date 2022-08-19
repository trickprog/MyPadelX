import React from 'react'

export default function Activityfeed(props) {
    return (
        <>


            <div class="max-w-sm bg-blue-500 rounded-lg  shadow-md font-Poppins">
                <a href="#">
                    <img class="rounded-t-lg h-[250px] w-full" src="http://source.unsplash.com/1000x1000/?library" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{props.Title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-white">{props.desc}</p>
                </div>
            </div>

        </>
    )
}
