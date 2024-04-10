import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../../redux/actions";
import { enqueueSnackbar } from 'notistack'

const Table = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        dispatch(deleteBooking(parseInt(e.currentTarget.id)));
        enqueueSnackbar('Turno cancelado con exito!.', { variant: 'success' })
    };
    console.log(data)

    return (
        <>
            {data.length && (
                <div className="max-w-6xl mx-auto mt-5 bg-white">
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-slate-300 text-black rounded-sm">
                                <tr>
                                    <th>Servicio</th>
                                    <th></th>
                                    <th>Fecha</th>
                                    <th>Profesional</th>
                                    <th>Padecimiento</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.from}</td>
                                        <td>{data.to}</td>
                                        <td>{data.date}</td>
                                        <td>{data.guests}</td>
                                        <td>{data.ticketclassName}</td>
                                        <td><button className="btn-xs bg-red-500 text-white" id={`${data.id}`} onClick={(e) => handleDelete(e)}> <MdDelete /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Table;