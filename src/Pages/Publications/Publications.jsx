import { Link } from 'react-router-dom';
import PublicationsContainer from './PublicationsStyles';

const Publications = () => {
    return (
        <PublicationsContainer>
            <div id='publications'>
                <ol>
                    <li className="LiCategory">In scientific journals</li>
                        <ul>
                            <li className="LiItems">Febres M., Legendre D., Existence of Moffatt vortices at a moving contact line between two fluids. Phys. Rev. Fluids 2, 114002, June, 2017. <a className="HLink" href="https://doi.org/10.1103/PhysRevFluids.2.114002" target="_blank" rel="noreferrer">DOI</a>, <Link className="LocalRepo" to="publications/vortices">[local repo]</Link>
                            </li>
                            <li className="LiItems">Febres M., Legendre D., Enhancement of a 2D front-tracking algorithm with a non-uniform distribution of lagrangian markers. Journal of Computational physics, July, 2017. <a className="HLink" href="https://doi.org/10.1016/j.jcp.2017.12.021" target="_blank" rel="noreferrer">DOI</a>, <Link className="LocalRepo" to="publications/front-tracking">[local repo]</Link>
                            </li>
                        </ul>
                    <li className="LiCategory">In conferences</li>
                        <ul>
                            <li className="LiItems"> Febres M., Legendre D., Spurious currents reduction in two-phase flow numerical simulations using the Front tracking method with non-uniform Lagrangian markers distribution. 3rd International Conference on Numerical Methods in Multiphase Flows (ICNMMF-III). Tokyo - Japan, June, 2017. </li>
                            <li className="LiItems"> Febres M., Legendre D., Moffatt Vortices in the Vicinity of a Contact Line. 9th International Conference on Multiphase flow. Firenze - Italy, May, 2016.
                            </li>
                            <li className="LiItems"> Febres M., Berrios D. R., 2d finite volume computational code for fluid flow problems on unstructured meshes, In: VII Congreso Bolivariano de Ingenierı́a Mecánica - COBIM VII, Cusco - Perú, 2012. <a className="HLink" href="http://congreso.pucp.edu.pe/vii-cobim/B.4.1.pdf" target="_blank" rel="noreferrer">Link</a>
                            </li>
                            <li className="LiItems"> Berrios D. R., Febres M., Machinery resonance analysis on vibration isolation, In: VII Congreso Bolivariano de Ingenierı́a Mecánica - COBIM VII, Cusco - Perú, 2012. <a className="HLink" href="http://congreso.pucp.edu.pe/vii-cobim/A.3.2.pdf" target="_blank" rel="noreferrer">Link</a>.
                            </li>
                            <li className="LiItems"> Febres, M., Angela O. Nieckele., Slug flow prediction with the volume of fluid model. In: 13th Brazilian Congress of Thermal Sciences and Engineering, 2010, Uberlândia - Brazil, MG. Anais do 13th Brazilian Congress of Thermal Sciences and Engineering. Sao Paulo - Brazil: ABCM, 2010. p. 1-8. <a className="HLink" href="http://abcm.org.br/app/webroot/anais/encit/2010/PDF/ENC10-0537.pdf" target="_blank" rel="noreferrer">Link</a>.
                            </li>
                            <li className="LiItems"> Febres, M., Nieckele, A. O., Fonseca Jr, R., Azevedo, Luis, F. Alzuguir. Three-dimensional unit slug in a horizontal pipeline. In: 7th International Conference on Multiphase Flow, 2010, Tampa, Fl - USA. Proceedings 7th International Conference on Multiphase Flow, 2010. <a className="HLink" href="http://ufdc.ufl.edu/UF00102023/00422" target="_blank" rel="noreferrer">Link</a>
                            </li>
                            <li className="LiItems"> Febres, M., Nieckele, A. O., Computacional analysis on stratified two-phase oil/water co-current flow in horizontal pipes. In: COBEM 2009, International Congress of Mechanical Engineering, 2009, Gramado - Brazil. Anais do COBEM 2009, 20th International Congress of Mechanical Engineering. Gramado: ABCM, 2009. <a className="HLink" href="http://abcm.org.br/app/webroot/anais/cobem/2009/pdf/COB09-1694.pdf" target="_blank" rel="noreferrer">Link</a>
                            </li>
                        </ul>
                </ol>
            </div>
        </PublicationsContainer>
    )
}

export default Publications;
