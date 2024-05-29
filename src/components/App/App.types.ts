export interface AppProps {}
export interface AppState {
  searchText: string;
  page: number;
  isModalOpen: boolean;
  selectedImage: Image | null;
  prevLoading: boolean;
}
