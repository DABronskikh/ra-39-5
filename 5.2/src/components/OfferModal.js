
export default function OfferModal(props) {
    console.log(props);

    return (
        <div className="_modal">
            <div className="modal-body">
                {props.children}
            </div>
            <button className="btn modal-close">закрыть</button>
        </div>
    )

}
