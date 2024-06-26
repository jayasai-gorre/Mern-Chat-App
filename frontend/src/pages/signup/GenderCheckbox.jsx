import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='text-gray-100 label-text'>Male</span>
                <input type="checkbox" className='checkbox checkbox-info' 
                    checked={selectedGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='text-gray-100 label-text'>Female</span> 
                <input type="checkbox" className='checkbox checkbox-info' 
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                />

            </label>
        </div>
    </div>
  )
}
export default GenderCheckbox


// STATER CODE FOR GENDERCHECKBOX PAGE
// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//           <div className='form-control'>
//               <label className={'label gap-2 cursor-pointer'}>
//                   <span className='text-gray-100 label-text'>Male</span>
//                   <input type="checkbox" className='checkbox checkbox-info' border-slate-900/>
//               </label>
//           </div>
  
//           <div className='form-control'>
//               <label className={'label gap-2 cursor-pointer'}>
//                   <span className='text-gray-100 label-text'>Female</span> 
//                   <input type="checkbox" className='checkbox checkbox-info' border-slate-900/>
//               </label>
//           </div>
//       </div>
//     )
//   }
// export default GenderCheckbox