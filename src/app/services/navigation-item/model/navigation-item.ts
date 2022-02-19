export interface ListItem {
    itemLabel: string;
}

export interface NavigationItem extends ListItem {
    itemLink: string;
    queryParams?: { [paramName: string]: string };
}

export interface SelectableItem extends ListItem {
    itemSelected: boolean;
}
