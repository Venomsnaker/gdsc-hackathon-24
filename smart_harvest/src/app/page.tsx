import Image from "next/image";
import Demmon from '@/assets/demmo.jpg'
import Banner from "@/assets/banner.jpg";
import Icon1 from "@/assets/icon1.jpg"
import Icon2 from "@/assets/icon2.jpg"
import Icon3 from "@/assets/icon3.jpg"
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { TabsDemo } from "@/components/tab-login";
import { redirect } from "next/navigation";
import { isAuthFirebase } from "@/action/is-auth";
export default async function Home() {

  const isAuth = await isAuthFirebase()
  console.log(isAuth)
  if (isAuth) {
    redirect('/dashboard')
  }

  return (
    <>

      <header className='gap-4 max-w-[1270px] py-5 grid grid-cols-12 w-full mx-auto'>
        <span className='font-custome text-[#047857] text-lg font-semibold col-start-1 col-span-2'> Smart Harvest </span>
        <span className='font-custome'> Chức năng </span>
        <span className='font-custome col-span-2'> Tự động hóa </span>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={'outline'} className='col-start-11'> Đăng nhập </Button>
          </DrawerTrigger>
          <DrawerTrigger asChild>
            <Button className='start-12'> Đăng ký </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Smart Harvest</DrawerTitle>
                <DrawerDescription>Bạn của nhà nông.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0 mb-[100px]">
                <TabsDemo />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </header>
      <main className="flex flex-col justify-center items-center w-full">
        <Image src={Banner} alt="banner" width={400} />
        <Image src={Demmon} alt="demo" width={1000} />
        <div className="w-full flex justify-center items-center gap-[150px] mt-10">
          <div className="max-w-[250px] flex flex-col items-center font-custome gap-2">
            <Image src={Icon1} alt="icon1" width={40} />
            <h1 className="font-semibold">Chuẩn đoán bệnh lúa</h1>
            <h2 className="text-sm text-slate-600">  Ứng dụng công nghệ thị giác máy tính để phát hiện sớm các bệnh lúa, giúp nâng cao hiệu suất và chất lượng sản xuất. </h2>
          </div>
          <div className="max-w-[250px] flex flex-col items-center font-custome gap-2">
            <Image src={Icon2} alt="icon1" width={40} />
            <h1 className="font-semibold"> Phân tích dự báo thời tiết </h1>
            <h2 className="text-sm text-slate-600">   Ứng dụng công nghệ cung cấp thông tin dự báo thời tiết chi tiết và chính xác, hỗ trợ nông dân lên kế hoạch sản xuất hiệu quả. </h2>
          </div>
          <div className="max-w-[250px] flex flex-col items-center font-custome gap-2">
            <Image src={Icon3} alt="icon1" width={40} />
            <h1 className="font-semibold"> Hỗ trợ cập nhật tin tức, buôn bán </h1>
            <h2 className="text-sm text-slate-600">  Cung cấp thông tin thị trường và tin tức nông nghiệp mới nhất, giúp nông dân nắm bắt cơ hội kinh doanh và tối ưu hóa hoạt động buôn bán.</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
