import s2 from './style.module.css';

import UrlBg3 from '../../assets/bg3.jpg';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
	// const styleRootS = hideBackground ? { background: colorBg } : { background: `url(${UrlBg})`};
	const style = {};
	if (urlBg) { style.backgroundImage = `url(${UrlBg3})` }
	if (colorBg) { style.backgroundColor = colorBg }

	return (
		<section className={ s2.root } id={id} style={style}>
			<div className={ s2.wrapper }>
				<article>
					<div className={ s2.title }>
						<h3> {title} </h3>
						<span className={ s2.separator }></span>
					</div>	
					<div className={ s2.desc + ' ' + s2.full }>
						{children}
					</div>	
				</article>
			</div>
		</section>
	);
}

export default Layout;