import Input from '../../components/Input.jsx'

const Gender = ({handleChange}) => {
    return (
        <>
            <div className="ml">
                <h2 className="sidebar-title gender-title">Gender</h2>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test3"/>
                    <span className="checkmark"></span>All
                </label>
                <Input
                   handleChange={handleChange}
                   value="female"
                   title="Female"
                   name="test3"
                />
                <Input
                    handleChange={handleChange}
                    value="male"
                    title="Male"
                    name="test3"
                />
                <Input
                    handleChange={handleChange}
                    value="unisex"
                    title="Unisex"
                    name="test3"
                />
            </div>
        </>
    )
}
export default Gender
