import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'; 

interface Props {
    pageQuantity: number;
    changePage: Function,
    currentPage: number;
}

export default function PaginationRowsTable(props: Props) {
    const pages = Array.from({ length: props.pageQuantity }, (_, i) => i + 1);

    return (
        <Pagination>
              <PaginationPrevious
                onClick={() => props.changePage(props.currentPage - 1)}
                className="p-2 text-gray-600 hover:text-gray-800"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </PaginationPrevious>
            <PaginationContent>
                {pages.map((pageNumber) => (
                    <PaginationItem 
                    onClick={() => { props.changePage(pageNumber)}}
                    key={pageNumber}>
                        <PaginationLink>{pageNumber}</PaginationLink>
                    </PaginationItem>
                ))}
            </PaginationContent>
            <PaginationNext  onClick={() => props.changePage(props.currentPage + 1)}
            className="p-2 text-gray-600 hover:text-gray-800"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </PaginationNext>
        </Pagination>
    );
}