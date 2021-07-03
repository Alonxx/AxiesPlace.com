import {connect} from 'react-redux';
import {Button, Dropwmenu} from './styled';
import {setFilters} from '../../redux/actions';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {useState} from 'react';

const arrayClass = [
	{name: 'All', color: '#eaeaeb'},
	{name: 'Aquatic', color: '#00b8ce'},
	{name: 'Beast', color: '#ffb812'},
	{name: 'Bird', color: '#ff8bbd'},
	{name: 'Bug', color: '#ff5341'},
	{name: 'Dawn', color: '#beceff'},
	{name: 'Dusk', color: '#129092'},
	{name: 'Mech', color: '#c6bdd4'},
	{name: 'Plant', color: '#6cc000'},
	{name: 'Reptile', color: '#00b8ce'},
];

const arrayPrice = ['All', 'Lowest', 'Highest'];

const Filters = ({filters, setFilters}) => {
	const [showDropwmenu, setShowDropwMenu] = useState(false);

	const handleOnClick = (e) => {
		setFilters({...filters, [e.target.name]: e.target.value});
		setShowDropwMenu(false);
	};

	return (
		<Dropwmenu>
			<button
				className='dropwmenu'
				onClick={() => setShowDropwMenu(!showDropwmenu)}
			>
				Filters
				<span className={'icon'}>
					<h1>
						<MdKeyboardArrowDown />
					</h1>
				</span>
			</button>
			<div
				className={showDropwmenu ? 'dropdown-content show' : 'dropdown-content'}
			>
				<span className='sub_title'>Class</span>
				{arrayClass.map((el, i) => (
					<Button
						className={'sub_dropdown'}
						key={i}
						onClick={(e) => handleOnClick(e)}
						name='class'
						value={el.name}
						color={el.name}
						text={filters.class === el.name ? el.name : null}
					>
						{el.name}
					</Button>
				))}
				<span className='sub_title'>Price</span>
				{arrayPrice.map((el, i) => (
					<Button
						className='sub_dropdown'
						key={i}
						onClick={(e) => handleOnClick(e)}
						name='price'
						color={el}
						value={el}
						text={filters.price === el ? el : null}
					>
						{el}
					</Button>
				))}
			</div>
		</Dropwmenu>
	);
};

/* 		<			<div className='div_filter_container'>
				<div className='div_filter_content'>
					<div className='div_filter_class'>
						<span className='filter_icon'>
							<BsFilter />
						</span>
						{arrayClass.map((el, i) => (
							<Button
								key={i}
								onClick={(e) => handleOnClick(e)}
								name='class'
								value={el.name}
								color={el.name}
								text={filters.class === el.name ? el.name : null}
							>
								{el.name}
							</Button>
						))}
					</div>
					<div className='div_filter_price'>
						<span className='filter_icon'>Ξ</span>
						{arrayPrice.map((el, i) => (
							<Button
								key={i}
								onClick={(e) => handleOnClick(e)}
								name='price'
								color={el}
								value={el}
								text={filters.price === el ? el : null}
							>
								{el}
							</Button>
						))}
					</div>
				</div>
			</div> */

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFilters: (filters) => dispatch(setFilters(filters)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
