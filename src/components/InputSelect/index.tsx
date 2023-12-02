import { GeneroSelect,GeneroOption } from "./style";
function CaixaSelect(){
    return (
    <>
        <GeneroSelect placeholder="Seus Pronomes" name="generos" id="genero">
            <GeneroOption value="ele/dele">Ele/Dele</GeneroOption>
            <GeneroOption value="ela/dela">Ela/Dela</GeneroOption>
            <GeneroOption value="elu/delu">Elu/Delu</GeneroOption>  
        </GeneroSelect>
    </>
    );
}
export default CaixaSelect;
