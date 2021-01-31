import s3 from './style.module.css';
import cardBackSide from '../../assets/card-back-side.jpg';

const PokemonCard = ({ name, img, id, type, values }) => {
	const onClick = () => {
		console.log("Click");
	}
	return (
	<div className={s3.root} onClick={onClick}>
		<div className={s3.pokemonCard}>
			<div className={s3.cardFront}>
				<div className={`${s3.wrap} ${s3.front}`}>
					<div className={`${s3.pokemon} ${s3[type]}`}>
						<div className={s3.values}>
							<div className={`${s3.count} ${s3.top}`}>{values.top}</div>
							<div className={`${s3.count} ${s3.right}`}>{values.right}</div>
							<div className={`${s3.count} ${s3.bottom}`}>{values.bottom}</div>
							<div className={`${s3.count} ${s3.left}`}>{values.left}</div>
						</div>
						<div className={s3.imgContainer}>
							<img src={img} alt={name} />
						</div>
						<div className={s3.info}>
							<span className={s3.number}>#{id}</span>
							<h3 className={s3.name}>{name}</h3>
							<small className={s3.type}>Type: <span>{type}</span></small>
						</div>
					</div>
				</div>
			</div>

			<div className="s3.cardBack">
				<div className={`${s3.wrap} ${s3.back}`}>
					<img src={cardBackSide} alt="Сard Backeds" />
				</div>
			</div>

		</div>
	</div>
	)
}

export default PokemonCard;