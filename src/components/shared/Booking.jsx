import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaPlus } from "react-icons/fa";
import { makeBooking } from './../../redux/actions';
import { enqueueSnackbar } from 'notistack'
const Book = () => {
    const data = useSelector((state) => state.data);
    const size = data.length;
    const dispatch = useDispatch();
    const [bookingData, setBookingData] = useState({});

    const handleChange = (e) => {
        const newBookingData = { ...bookingData };
        newBookingData[e.target.name] = e.target.value;
        setBookingData(newBookingData);
    };

    const handleBook = (e) => {
        e.preventDefault();
        if (size >= 3) {
            enqueueSnackbar('Disculpa, no puedes tener mas de 3 turnos a la vez.', { variant: 'error' })
        } else {
            if (Object.keys(bookingData).length === 4) {
                dispatch(makeBooking({ ...bookingData, id: size + 1 }));
                enqueueSnackbar('Reserva cargada con exito!.', { variant: 'success' })
            } else {
                enqueueSnackbar('Por favor selecciona los datos requeridos para avanzar.', { variant: 'error' })
            }
        }
    };

    console.log(bookingData)
    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="flex flex-col md:flex-row">
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="font-bold text-slate-900">Servicio</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="from"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Seleccione
                                </option>
                                <option>Baño y corte de pelo</option>
                                <option>Recorte de uñas</option>
                                <option>Masaje relajante</option>
                            </select>
                        </div>
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="text-slate-900 font-bold">Fecha</p>
                        <input
                            type="date"
                            className="outline-none px-2 py-2 w-full date"
                            name="date"
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="text-slate-900 font-bold">Profesional</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Seleccione
                                </option>
                                <option value="1">Ignacio Ferraro</option>
                                <option value="2">Tatiana Enrique</option>
                                <option value="3">Juan Martin Lara</option>
                                <option value="4">Carla Balbuena</option>
                            </select>
                        </div>
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p className="text-slate-900 font-bold">¿Posee algun padecimiento?</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="ticketclassName"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Seleccione
                                </option>
                                <option>Si</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={(e) => handleBook(e)}
                        className="inline-flex items-center bg-indigo-500 text-white px-8 py-1 space-x-2"
                        type="submit"
                    >
                        <FaPlus />
                        <span className="text-sm">Agendar</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Book;