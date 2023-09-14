const SiteNotes = (props) => {
    let data = props.notes;
    return (
        <div className='page-table'>
            <div className='page-table-row-outter'>
                <div className='page-table-row-inner'>
                    <div className='page-table-row-inner-padding'>{data}</div>
                </div>
            </div>
        </div>
    )
}

export default SiteNotes;