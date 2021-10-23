import Dashboard from '.';
import { act, render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('Dashboard', () => {
  const change = (field, value) => {
    fireEvent.change(field, {target: { value }});
  }

  const fileUpload = (field, file) => {
    fireEvent.change(field, {target: { files: file }});
  }
  
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  });

  beforeEach(() => {
    const bookSample = [
      {
        "author": "author 1",
        "country": "country 1",
        "image": "image1.jpg",
        "language": "language 1",
        "description": "description 1",
        "pages": "pages 1",
        "title": "title 1",
        "year": "year 1",
        "id": "1",
        "isRented": false
      },
      {
        "author": "author 2",
        "country": "country 2",
        "image": "image2.jpg",
        "language": "language 2",
        "description": "description 2",
        "pages": "pages 2",
        "title": "title 2",
        "year": "year 2",
        "id": "2",
        "isRented": false
      },
    ]
    axios.get.mockResolvedValue({data: bookSample});
  })

  it('renders a search field', async () => {
    await act(async () => {
      render(<Dashboard />);
    });
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('renders a book', async () => {
    await act(async () => {
      render(<Dashboard />);
    });

    expect(await screen.findByText('title 1')).toBeInTheDocument();
    expect(await screen.findByText('title 2')).toBeInTheDocument();
  });

  it('search a specific book', async () => {
    await act(async () => {
      render(<Dashboard />);
    });
  
    change(screen.getByLabelText('Search'), 'title 1');

    expect(screen.getByText('title 1')).toBeInTheDocument();
    expect(screen.queryByText('title 2')).not.toBeInTheDocument();
  });

  it('rent a book', async () => {
    await act(async () => {
      render(<Dashboard />);
    });
    
    const rentButtons = screen.getAllByText('Rent');
    
    fireEvent.click(rentButtons[0]);
    fireEvent.click(rentButtons[1]);
    
    const rentedLabels = await screen.findAllByText('Rented');

    expect(rentedLabels.length).toBe(2);
  });

  it('show book details', async () => {
    await act(async () => {
      render(<Dashboard />);
    });
    
    const detailButton = screen.getAllByText('Details')[0];
    
    fireEvent.click(detailButton);

    expect(screen.getByText('Print Length')).toBeInTheDocument();
    expect(screen.getByText('Publication')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
  });

  it('have a edit mode', async () => {
    await act(async () => {
      render(<Dashboard />);
    });

    fireEvent.click(screen.getByText('Edit Books'));

    expect(screen.getByText('Done')).toBeInTheDocument();
    expect(screen.getAllByRole('Edit').length).toBe(2);
    expect(screen.getAllByRole('Remove').length).toBe(2);
  });

  it('removes a book', async () => {
    await act(async () => {
      render(<Dashboard />);
    });

    fireEvent.click(screen.getByText('Edit Books'));
    fireEvent.click(screen.getAllByRole('Remove')[0]);

    expect(screen.queryByText('title 1')).not.toBeInTheDocument();
  });

  it('edits a book', async () => {    
    await act(async () => {
      render(<Dashboard />);
    });

    fireEvent.click(screen.getByText('Edit Books'));
    fireEvent.click(screen.getAllByRole('Edit')[0]);
    
    change(screen.getByLabelText('Title'), 'new title');
    change(screen.getByLabelText('Author'), 'new author');
    change(screen.getByLabelText('Description'), 'new description');
    change(screen.getByLabelText('Pages'), 'new pages');
    change(screen.getByLabelText('Publication'), 'new publication');
    change(screen.getByLabelText('Language'), 'new language');
    
    fireEvent.click(screen.getByText('Save'));

    expect(await screen.findByText('new title')).toBeInTheDocument();
  });

  it('adds a new book', async () => {
    const image = [new File(['new-image'], 'new-image.jpg', { type: 'image/jpg'})];
    global.URL.createObjectURL = jest.fn(() => 'new-image.jpg');

    await act(async () => {
      render(<Dashboard />);
    });

    fireEvent.click(screen.getByText('New Book'));
    
    change(screen.getByLabelText('Title'), 'add title');
    change(screen.getByLabelText('Author'), 'add author');
    change(screen.getByLabelText('Description'), 'add description');
    fileUpload(screen.getByLabelText('Image', [image]));
    change(screen.getByLabelText('Pages'), 'add pages');
    change(screen.getByLabelText('Publication'), 'add publication');
    change(screen.getByLabelText('Language'), 'add language');
    
    fireEvent.click(screen.getByText('Save'));
    expect(await screen.findByText('add title')).toBeInTheDocument();
    screen.debug();
  });
});