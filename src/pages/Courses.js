import React from 'react'
import staffs from './assets/staff.png'
import departments from './assets/department.png'
import interns from './assets/inerns.png'
import resign from './assets/resigned.png'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import { Bar, Pie, Doughnut } from "react-chartjs-2";

const Courses = ({openNav}) => {
    const labell = ["IT-Support", "Tech & Communiction", "HR", "Accounting", "Security"];

  const data = {
  labels: labell,
  datasets: [
    {
      label: "Total Staffs",
      backgroundColor: "rgb(47, 141, 71)",
      data: [20, 5, 6, 7, 10,],
      borderRadius:4,
      stack: 'Stack 0'

    },
    {
      label: "Permanent staff",
      backgroundColor: "rgb(175, 236, 175)",
      data: [14, 3, 5, 6, 0,],
      borderRadius:4,
      stack: 'Stack 1'


    },
    {
      label: "Interns",
      backgroundColor: "rgb(255, 255, 150)",
      data: [6, 2, 1, 1, 0,],
      borderRadius:4,
      stack: 'Stack 2'

    },
    {
      label: "Contract",
      backgroundColor: "rgb(252, 209, 131)",
      data: [0, 0, 0, 0, 10,],
      borderRadius:4,
      stack: 'Stack 3'

    },
  ],
};

  return (
    <div className='w-[99%] px-1 flex flex-col'>

              {/* Staff Statistics */}
      <section className={`grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-6`}>
              {/* Total Employees */}
        <div className='flex flex-col justify-center items-center px-5 py-2 rounded-sm shadow '>
          <div>
            <img src={staffs} alt='staffs icon' width={30} height={30}/>
          </div>
          
          <div>
            <p className='max-md:text-sm'>Total Employees</p>
          </div>

          <div>
            <p className='font-bold text-2xl'>626</p>
          </div>
        </div>
                    {/* Total Departments */}
        <div className='flex flex-col justify-center items-center px-5 py-2 rounded-sm shadow '>
          <div>
            <img src={departments} alt='staffs icon' width={30} height={30}/>
          </div>
          
          <div>
            <p className='max-sm:text-sm'>Total Departments</p>
          </div>

          <div>
            <p className='font-bold text-2xl'>12</p>
          </div>
        </div>

                    {/* Total interns */}
        <div className='flex flex-col justify-center items-center px-5 py-2 rounded-sm shadow '>
          <div>
            <img src={interns} alt='staffs icon' width={30} height={30}/>
          </div>
          
          <div>
            <p className='max-sm:text-sm'>Total Interns</p>
          </div>

          <div>
            <p className='font-bold text-2xl'>76</p>
          </div>
        </div>

                      {/* Resigned Staffs */}
        <div className='flex flex-col justify-center items-center px-5 py-2 rounded-sm shadow '>
          <div>
            <img src={resign} alt='staffs icon' width={30} height={30}/>
          </div>
          
          <div>
            <p className='max-sm:text-sm'>Resigned Staffs</p>
          </div>

          <div>
            <p className='font-bold text-2xl'>36</p>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-4 mt-8 rounded-sm shadow px-3'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-bold text-2xl max-sm:text-sm'>Employee Info</p>
          </div>

          <div className='flex gap-2 items-center'>
            <div><p className='font-bold text-xl max-sm:text-sm'>Filter</p></div>
            <select className='border-[1.5px] border-[green] outline-none mt-1 max-sm:w-24 max-sm:text-xs max-sm:h-4 max-sm:py-0 rounded-sm py-1'>
              <option></option>
              <option className='max-sm:text-xs'>Intern</option>
              <option className='max-sm:text-xs'>Permanent</option>
              <option className='max-sm:text-xs'>Tech & communication</option>
              <option className='max-sm:text-xs'>HR</option>
              <option className='max-sm:text-xs'>Communications</option>
              <option className='max-sm:text-xs'>IT Support</option>
            </select>
          </div>
        </div>


        <div className='w-full '>
          <table className='text-sm table-auto w-full '>
            <tr className='h-10 border-b-2 border-opacity-15 border-[black] max-sm:text-[9.5px]'>
              <th className='text-start text-[#949494] '>Employee Name</th>
              <th className='text-start text-[#949494] '>Department</th>
              <th className='text-start text-[#949494] '>Age</th>
              <th className='text-start text-[#949494] '>Status</th>
              <th className='text-start text-[#949494] '>Salary</th>
            </tr>
            <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Gabriel Isaiah</td>
              <td>Tech & Communications</td>
              <td>27</td>
              <td> <button className='px-3 max-sm:px-1 -py-2 bg-[yellow] bg-opacity-40 rounded-sm text-[#89892a]'>Intern</button></td>
              <td>#50,000</td>
            </tr>
            <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Samuel Anuna</td>
              <td>Tech & Communications</td>
              <td>30</td>
              <td> <button className='px-3 max-sm:px-1 -py-2 bg-[green] bg-opacity-30 rounded-sm text-[green]'>Permanent</button></td>
              <td>#100,000</td>
            </tr>
            <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Adedayo Odunbanjo</td>
              <td>HR</td>
              <td>35</td>
              <td> <button className='px-3 max-sm:px-1 -py-2 bg-[green] bg-opacity-30 rounded-sm text-[green]'>Permanent</button></td>
              <td>#450,000</td>
            </tr>
            <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Femi Aloba</td>
              <td>Communications</td>
              <td>32</td>
              <td> <button className='px-3 max-sm:px-1 -py-2 bg-[green] bg-opacity-30 rounded-sm text-[green]'>Permanent</button></td>
              <td>#150,000</td>
            </tr>
             <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Oladapo Olusola</td>
              <td>Tech & Communications</td>
              <td>27</td>
              <td> <button className='px-3 max-sm:px-1 -py-2 bg-[yellow] bg-opacity-40 rounded-sm text-[#89892a]'>Intern</button></td>
              <td>#50,000</td>
            </tr>
            <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Ifiok Uwen</td>
              <td>HR</td>
              <td>32</td>
              <td> <button className='px-3 max-sm:px-1 -py-2 bg-[green] bg-opacity-30 rounded-sm text-[green]'>Permanent</button></td>
              <td>#230,000</td>
            </tr>
            <tr className='h-10 max-sm:text-[9.5px]'>
              <td>Toluwalase Bakare</td>
              <td>Communications</td>
              <td>38</td>
              <td> <button className='px-3 max-sm:px-1 bg-[green] bg-opacity-30 rounded-sm text-[green]'>Permanent</button></td>
              <td>#250,000</td>
            </tr>
          </table>
        </div>
      </section>

                    {/* Staffs count per Departments */}
      <section className='flex gap-5 mt-10 max-sm:flex-col'>
        <div className={` shadow pb-1 rounded-lg mt-4 h-auto w-[60%] max-sm:w-[100%] ${openNav? 'ml-10': ''}  `} >
          <Bar data={data} />
        </div>
        <div className='w-[35%] text-[#fcd183]'>
          {/* <Doughnut  data2={data2}/> */}
        </div>
      </section>
    </div>
  )
}
 
export default Courses