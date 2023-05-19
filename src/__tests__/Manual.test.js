// Path: src/setupTests.js


const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith('Warning:')) {
    return;
  }

  originalConsoleError(message);
}

function suppressDomErrors() {
  it("test_suppress_dom_errors_successfully_suppresses_warning_messages", () => {
    suppressDomErrors();
    console.error("Warning: This is a warning message");
    expect(console.error).not.toHaveBeenCalled();
  });
  it("test_suppress_dom_errors_does_not_call_original_console_error_for_warning_messages", () => {
    const originalConsoleError = console.error;
    suppressDomErrors();
    console.error("Warning: This is a warning message");
    expect(originalConsoleError).not.toHaveBeenCalled();
});

}


function restoreDomErrors() {
      // Tests that suppressDomErrors does not call the original console.error for messages that start with 'Warning:'.
}

function queryAllByTestId(container, id) {

    // Tests that the function returns an array of matching elements.
    it("test_query_all_by_test_id_returns_matching_elements", () => {
      // Arrange
      const container = document.createElement('div');
      container.innerHTML = `
          <div data-testid="test-id-1"></div>
          <div data-testid="test-id-2"></div>
          <div data-testid="test-id-3"></div>
      `;
      const id = "test-id-2";

      // Act
      const result = queryAllByTestId(container, id);

      // Assert
      expect(result.length).toBe(1);
      expect(result[0].getAttribute('data-testid')).toBe(id);
  });

  // Tests that the function returns an array of all matching elements when multiple elements with matching data-testid exist in container.
  it("test_query_all_by_test_id_multiple_matches", () => {
      // Arrange
      const container = document.createElement('div');
      container.innerHTML = `
          <div data-testid="test-id"></div>
          <div data-testid="test-id"></div>
          <div data-testid="test-id"></div>
      `;
      const id = "test-id";

      // Act
      const result = queryAllByTestId(container, id);

      // Assert
      expect(result.length).toBe(3);
  });

  // Tests that the function returns an empty array when container is empty.
  it("test_query_all_by_test_id_empty_container", () => {
      // Arrange
      const container = document.createElement('div');
      const id = "test-id";

      // Act
      const result = queryAllByTestId(container, id);

      // Assert
      expect(result.length).toBe(0);
  });

  // Tests that the function returns an empty array when container does not contain any elements with matching data-testid.
  it("test_query_all_by_test_id_no_matches", () => {
      // Arrange
      const container = document.createElement('div');
      container.innerHTML = `
          <div></div>
          <span></span>
          <p></p>
      `;
      const id = "test-id";

      // Act
      const result = queryAllByTestId(container, id);

      // Assert
      expect(result.length).toBe(0);
  });

  // Tests that the function returns an array of all matching elements when data-testid is not unique within container.
  it("test_query_all_by_test_id_non_unique_id", () => {
      // Arrange
      const container = document.createElement('div');
      container.innerHTML = `
          <div data-testid="test-id"></div>
          <span>
              <div data-testid="test-id"></div>
          </span>
          <p data-testid="test-id"></p>
      `;
      const id = "test-id";

      // Act
      const result = queryAllByTestId(container, id);

      // Assert
      expect(result.length).toBe(3);
  });

  // Tests that the function returns an array of matching elements when data-testid contains special characters that may affect querySelectorAll.
  it("test_query_all_by_test_id_special_characters", () => {
      // Arrange
      const container = document.createElement('div');
      container.innerHTML = `
          <div data-testid="test-id-!@#$%^&*()_+-={}[]|\\:;\"',.?/~\`"></div>
          <span>
              <div data-testid="test-id-!@#$%^&*()_+-={}[]|\\:;\"',.?/~\`"></div>
          </span>
          <p data-testid="test-id-!@#$%^&*()_+-={}[]|\\:;\"',.?/~\`"></p>
      `;
      const id = "test-id-!@#$%^&*()_+-={}[]|\\:;\"',.?/~\`";

      // Act
      const result = queryAllByTestId(container, id);

      // Assert
      expect(result.length).toBe(3);
  });
  return [...container.querySelectorAll(`[data-testid="${id}"]`)];
}


// setup to run the tests and provide the terminal command
// npm test -- --coverage --watchAll=false
// npm test -- --coverage --watchAll=false
