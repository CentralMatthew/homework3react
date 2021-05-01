export default function Post({item, func}) {


    return (
        <div>
            #{item.id} -
            {item.title}
            <button onClick={() => func(item.id)}>Details</button>

        </div>
    )
}