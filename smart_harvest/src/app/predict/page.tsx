"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Image from 'next/image'
import Demo1 from '@/assets/benh/demo1.jpg'
import Demo2 from '@/assets/benh/demo2.jpg'
import Demo3 from '@/assets/benh/demo3.jpg'
import { Brain } from 'lucide-react'
import ReactLoading from 'react-loading';
import { diseases } from '@/constant/diseases'
// {0: 'bacterial_leaf_blight', 1: 'brown_spot', 2: 'healthy', 3: 'leaf_blast',
// 4: 'leaf_scald', 5: 'narrow_brown_spot', 6: 'rice_hispa', 7: 'sheath_blight', 8: 'tungro'}




function Page() {
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        const file = event.target.files[0]
        setFile(file as any);
        const formData = new FormData();
        formData.append('image', file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const imageDataUrl = reader.result;
            setImageUrl(imageDataUrl as any);
        }
    }
    const handleSubmit = () => {
        if (!file) return
        const formData = new FormData();
        setLoading(true);
        formData.append('image', file);
        fetch('http://35.247.138.127/api-ai/predict', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                setResult(data.data);
            }).catch(error => {
                console.error(error);
            }).finally(() => {
                setLoading(false);
            })

    }

    return (
        <main className='w-full flex flex-col gap-4'>
            <div className="grid grid-cols-2 h-[600px] gap-4">
                <div className="rounded-lg shadow-md transition-all hover:shadow-lg border p-4 bg-[#FFFFFF] congnong">
                    <div className="c">
                        <div className="flex items-center justify-center w-full">
                            {imageUrl ? <Image src={imageUrl} alt="" width={518.4} height={256} className='w-[518px] h-[256px]' /> : <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} />

                            </label>}
                        </div>

                    </div>
                    <Button className={`w-full my-4 ${loading ? "cursor-not-allowed" : ""}`} onClick={handleSubmit}> {!loading ? `${result ? (diseases as any)[result].vi : "Chẩn đoán ngay"}` : <ReactLoading type='spin' height={20} width={20} />}</Button>
                    <div className="w-full">
                        {result && ((diseases as any)[result].data as string[]).map((item, i) => (
                            <p key={i}> {item}</p>
                        ))}
                    </div>
                </div>
                <div className="rounded-lg shadow-md transition-all hover:shadow-lg border p-4 bg-[#FFFFFF] congnong">
                    <h1 className='font-bold text-lg my-4'> <Brain className='inline-block' /> Tầm quang trọng dự đoán giá lúa kịp thời </h1>
                    <div className="c">
                        <span className='font-bold'> Phòng tránh thiệt hại: </span>
                        <span className=''> Dự đoán bệnh lúa kịp thời giúp nông dân xác định sớm các dấu hiệu bệnh và thực hiện các biện pháp phòng ngừa trước khi bệnh phát triển quá nặng nề. Điều này giúp giảm thiểu thiệt hại do bệnh lúa gây ra và duy trì năng suất lúa.
                        </span>
                        <div className="flex flex-col items-center my-4">
                            <Image src={Demo1} alt='demo1' />
                        </div>
                    </div>
                    <div className="c">
                        <span className='font-bold'> Tối ưu hóa sử dụng phân bón và thuốc trừ sâu: </span>
                        <span className=''>  Bằng cách dự đoán bệnh lúa, nông dân có thể áp dụng phân bón và thuốc trừ sâu một cách hiệu quả hơn. Việc sử dụng các loại hóa chất này đúng lúc và đúng mức giúp tiết kiệm chi phí và giảm thiểu tác động tiêu cực đối với môi trường.

                        </span>
                        <div className="flex flex-col items-center my-4">
                            <Image src={Demo2} alt='demo1' />
                        </div>
                    </div>
                    <div className="c">
                        <span className='font-bold'>Bảo vệ sức khỏe của cây trồng:</span>
                        <span className=''> Dự đoán bệnh lúa giúp cho việc giám sát và bảo vệ sức khỏe của cây trồng, từ đó đảm bảo rằng chúng có thể phát triển mạnh mẽ và đạt được năng suất tối đa.
                        </span>
                        <div className="flex flex-col items-center my-4">
                            <Image src={Demo3} alt='demo1' />
                        </div>
                    </div>
                    <div className="c">
                        <span className='font-bold'>Tăng cường hiệu suất và lợi nhuận:</span>
                        <span className=''> Bằng cách ngăn chặn bệnh lúa từ giai đoạn ban đầu, nông dân có thể tối ưu hóa năng suất và chất lượng của cây trồng, từ đó tăng cường lợi nhuận và sự ổn định tài chính cho họ.
                        </span>

                    </div>
                    <div className="c">
                        <span className='font-bold'>Đảm bảo an ninh lương thực:</span>
                        <span className=''>  Bệnh lúa có thể gây ra thiệt hại lớn đối với sản lượng nông nghiệp, ảnh hưởng đến nguồn cung lương thực và an ninh thực phẩm của một quốc gia. Việc dự đoán và kiểm soát bệnh lúa giúp đảm bảo rằng nguồn cung lương thực không bị gián đoạn.
                        </span>

                    </div>


                </div>

            </div>


        </main>
    )
}

export default Page