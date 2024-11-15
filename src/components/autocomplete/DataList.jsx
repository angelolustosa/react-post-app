import React from 'react'
import { routes } from '../../routes/routes'
import { Link } from 'react-router-dom'

export const DataList = () => {
    return (
        <div>
            {/* <label for="exampleDataList" class="form-label">Datalist example</label> */}
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                {/* <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" /> */}
                {routes.map(r => <option value={r.path.replace('/', '')} />)}
            </datalist>
        </div>
    )
}
