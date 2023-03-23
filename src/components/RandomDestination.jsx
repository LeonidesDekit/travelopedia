import { useGetRandomDestinationQuery } from '../api/randomDestinationApi'

import React from 'react'

function RandomDestination() {
    const { data, isLoading, isSuccess, isError, error } = useGetRandomDestinationQuery();
    console.log(data);
    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        console.log(data);
        content = <div className="text-center text-white-50 border p-3">
            <h4 className="text-success">Random Destination Suggestion : </h4>
            {data.city},{data.country}
        </div>
    }
    return (
        <div className="pt-3">{content}</div>
    )
}

export default RandomDestination