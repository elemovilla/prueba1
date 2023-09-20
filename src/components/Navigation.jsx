import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';


export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>
			<header className='container'>
			

				

				
				
			</header>

			<Outlet />
		</>
	);
};
