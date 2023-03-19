import './addServiceForm.styles.css'

import { useState } from 'react'
import {addServiceToCompany} from '../../store/companies/companies.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectServicesSID } from '../../store/companies/companies.selector'

const AddServiceForm= ({company}) => {

    const dispatch = useDispatch()
    const serviceSID = useSelector(selectServicesSID)

    const SERVICE_TEMPLATE = {
        sid: 0,
        name: '',
        status: 'To Be Configured',
        monthlyCost:0,
    }
    const [newService,setNewService] = useState(SERVICE_TEMPLATE)

    const inputChange = (event) =>{
        const {value, className, validity} = event.target

        if (className === 'service-name-input') {
            setNewService({...newService,name:value})
        }

        if(className === 'service-monthlyCost-input') {
            if (validity.valid){
                setNewService({...newService,monthlyCost:value})
            }

        }
    }

    const addServiceHandler = (event) => {
        event.preventDefault();
        dispatch(addServiceToCompany(company.id,{...newService,sid: serviceSID}))
        setNewService(SERVICE_TEMPLATE)
    }



    return (
        <div className='add-service-container'>
            <div>TODO Strict this functionality for supervisors only, and at best only to supervisor that take care of company</div>
            <h2> Add new service to customer: {company.name}</h2>

            <form className='add-service-form' onSubmit={addServiceHandler}>
                <label> Service Name</label>
                <input type='text' className='service-name-input' value={newService.name} onChange={inputChange} />
                <label > Service Monthly Cost</label>
                <input type='text' className='service-monthlyCost-input' value={newService.monthlyCost} onChange={inputChange} pattern="[0-9]*" />
                <button type='submit'>Submit</button>
            </form>


        
        </div>
    )
}


export default AddServiceForm
