import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    handleRowsPerPage: Function
}
export default function SelectRowsTable(props : Props){
    return(
        <Select onValueChange={(el) => props.handleRowsPerPage(el)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="5" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Usuários por página</SelectLabel>
                <SelectItem value="3"><p style={{display: 'block'}}>3</p></SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}