"use client"
import { Button } from '@/components/ui/button'
import { AlertTriangle, MoveRight, Sun, Zap } from 'lucide-react'
import React, { use, useEffect } from 'react'
import CloudSun from '@/assets/weather/sun-cloud.jpg'
import Image from 'next/image'
import Chart from '@/components/chart'
import { getCurrWeather } from '@/action/get-weather'
import { isAuthFirebase } from '@/action/is-auth'
import { redirect, useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/action/firebase/db'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Table from '@/assets/table.png'
import Tab3 from '@/assets/tab3.png'
import Tab4 from '@/assets/tab4.png'
function Page() {
  const [weather, setWeather] = React.useState<any>(null)
  const [user, setUser] = React.useState<any>(null)
  const [username, setUsername] = React.useState<string>("")
  const router = useRouter()

  const myHeaders = new Headers();
  myHeaders.append("X-Goog-FieldMask", "places.displayName.text,places.nationalPhoneNumber,places.googleMapsUri,places.location");
  myHeaders.append("X-Goog-Api-Key", "AIzaSyCRJnsaJcohrs_D3q34AmtXjsgsQDpI1WQ");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "includedTypes": [
      "supermarket",
      "market"
    ],
    "maxResultCount": 10,
    "locationRestriction": {
      "circle": {
        "center": {
          "latitude": 10.8756514,
          "longitude": 106.796595
        },
        "radius": 20000
      }
    }
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  useEffect(() => {
    (async () => {
      const weather = await getCurrWeather()
      setWeather(weather)
    })()





    // fetch("https://places.googleapis.com/v1/places:searchNearby", requestOptions as any)
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email)
        getDocs(query(collection(db, "users"), where("email", "==", user.email))).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data())
            setUsername(doc.data().username)
          })
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        }
        );
      } else {
        router.push('/')
      }
    });
    console.log(user)



  }, [])



  return (
    <main className='w-full flex flex-col gap-4'>
      <div className="w-full flex items-center gap-4 my-2">
        <span className='font-semibold'> Hi , {username} </span>
        <span className='text-slate-500'> Hãy bắt đầu quản lý trang trại của bạn nào !</span>
      </div>
      <div className="grid grid-cols-4 h-[100px] gap-4">
        <div className="col-span-1 flex items-center rounded-lg shadow-md transition-all hover:shadow-lg border px-2 justify-between bg-[#FFFFFF]">
          <div className="">
            <div className="flex w-full float-right gap-2">
              <AlertTriangle size={20} strokeWidth={1} color='red' />
              <span className='font-semibold'>
                Lúa thiếu nước
              </span>
            </div>
            <span className='text-slate-600 text-sm'> Dựa theo tình hình thời tiết 5 ngày tới </span>
          </div>
          <Button className='w-12'>
            <MoveRight />
          </Button>
        </div>

        <div className="col-span-1 flex items-center rounded-lg shadow-md transition-all hover:shadow-lg border px-2 justify-between bg-[#FFFFFF]">
          <div className="">
            <div className="flex w-full float-right gap-2">
              <Zap size={20} strokeWidth={1} color='green' />
              <span className='font-semibold'>
                {weather?.name || "Đà Nẵng"}
              </span>
            </div>
            <p className='text-slate-600 text-sm font-semibold'> {weather?.main.temp || "Loading..."} °C </p>
            <span className='text-slate-600 text-sm'> {weather?.weather[0].description || "Loading..."} </span>

          </div>
          <Image src={CloudSun} alt='Cloud Sun' className='w-16' />
        </div>

        <div className="col-span-1 flex items-center rounded-lg shadow-md transition-all hover:shadow-lg border px-2 bg-[#FFFFFF]">
          <Image src={Tab3} alt='Tab3' />
        </div>


        <div className="col-span-1 flex items-center shadow-md hover:shadow-lg border px-2 bg-[#FFFFFF]">
          <Image src={Tab4} alt='Tab4' />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 h-[400px] bg-[#FFFFFF] rounded-lg shadow-lg border p-2">
          <Chart />
        </div>
        <div className="col-span-1 bg-[#FFFFFF] rounded-lg shadow-lg border p-2">
          <Image src={Table} alt='Table' />
        </div>
      </div>

    </main>
  )
}

export default Page