import { Ships } from "../components/ships/ships";
import { FC, useMemo, useState } from "react";
import { Pagination } from "../components/pagination/pagination";
import { useCustomSelector } from "@/utils/store";
import { RadioUI } from "@/components/ui/radio-ui/radio-ui";
import './main-page.scss';
import { Sorting } from "@/components/sorting/sorting";
import { Filtration } from "@/components/filtration/filtration";
import { TShipWithId } from "@/utils/slices/shipsSlice";
import { useSortedAndFilteredShips } from "@/hooks/useSortAndFilter";

export const MainPage: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const ships = useCustomSelector((store) => store.ships.vehicles);
    const { sortedShips, sortShips, filterShips } = useSortedAndFilteredShips(ships);
    const totalItems = ships.length;
    const ITEMS_PER_PAGE = [20, 40, 80];

    const handlePageChange = (newPage: number) => setCurrentPage(newPage);

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    const handleSortChange = (field: string) => sortShips(field);

    const handleFilterChange = (field: string, text: string) => filterShips(field, text);

    return (
        <main className="ships__page">
            <div className="ships__page-panel">
                <Sorting onSortChange={handleSortChange}/>
                <Filtration onFilterChange={handleFilterChange}/>
            </div>
            <Ships ships={sortedShips} currentPage={currentPage} itemsPerPage={itemsPerPage} />
            <div className="ships__page-pagination">
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    onPageChange={handlePageChange} 
                    maxVisiblePages={6}            
                />
                <RadioUI 
                    ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                    itemsPerPage={itemsPerPage}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                />
            </div>
        </main>
    );
};
