import { useState } from 'react'
import { useSelector } from 'react-redux'
import {selectCompaniesList, selectCompaniesId } from '../../store/companies/companies.selector'
import {addCompanyToRedux} from '../../store/companies/companies.action'
import { useDispatch } from 'react-redux'

const AddCompanyForm = () => {
    const companies = useSelector(selectCompaniesList)
    const compId = useSelector(selectCompaniesId)
    const dispatch = useDispatch()

    const COMPANY_TEMPLATE = {
        id: 0,
        name: '',
        nip: '',
        address: '',
        supervisor:'',
        services: [],
    }
    const [newCompany,setnewCompany] = useState(COMPANY_TEMPLATE)

    const inputChange = (event) =>{
        const {value, className, validity} = event.target

        if (className === 'company-name-input') {
            setnewCompany({...newCompany,name:value})
        }
        if(className === 'company-nip-input') {
            if (validity.valid){
                setnewCompany({...newCompany,nip:value})
            }
        }
        if(className === 'company-address-input') {
            setnewCompany({...newCompany,address:value})
        }
    }

    const addCompanySubmit = (event) => {
        event.preventDefault();
        console.log(companies)
        dispatch(addCompanyToRedux(companies,{...newCompany,id:compId+1}))
        setnewCompany({...COMPANY_TEMPLATE,id:compId})
    }

    const jsonState = () => {
        const array = JSON.stringify(companies)
        console.log(array)
    }



    return (
        <>

        <form className='add-company-form' onSubmit={addCompanySubmit}>
            <label> Company Name</label>
            <input type='text' className='company-name-input' value={newCompany.name} onChange={inputChange} />
            <label > Company NIP</label>
            <input type='text' className='company-nip-input' value={newCompany.nip} onChange={inputChange} pattern="[0-9]*" />
            <label>Company Address</label>
            <input type='text' className='company-address-input' value={newCompany.address} onChange={inputChange} />
            <button type='submit'>Submit</button>
        </form>

        <button onClick={jsonState}> Log to console actual list of companies in JSON </button>
        </>
    )
}


export default AddCompanyForm